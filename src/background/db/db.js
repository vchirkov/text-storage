/**
 * Created by vlad.chirkov on 1.2.17.
 */
import queries from './queries';
import _ from 'lodash';

function executeTransaction(cb) {
    return dbPromise.then((db) => {
        return new Promise((res, rej) => {
            db.transaction((tx) => {
                cb(tx, res, rej);
            });
        });
    });
}

const dbPromise = new Promise((res, rej) => {
    const db = openDatabase('text-storage', '1.0', 'text-storage database', 2 * 1024 * 1024);
    if (!db) {
        rej();
    }

    db.transaction(function (tx) {
        tx.executeSql(queries.dropDomain);
        tx.executeSql(queries.dropTopic);
        tx.executeSql(queries.dropSelection);
        tx.executeSql(queries.createTopicTable);
        tx.executeSql(queries.createDomainTable);
        tx.executeSql(queries.createSelectionTable);
        res(db);
    });
});

export default {
    saveSelectionText: function ({selection, url}) {
        let tmpA = document.createElement('a');
        tmpA.href = url;

        return executeTransaction((tx, res, rej) => {
            tx.executeSql(queries.insertDomain, [tmpA.hostname]);
            tx.executeSql(queries.insertSelection, [selection, url, tmpA.hostname], (tx, sql_res) => {
                res(sql_res.rows[0]);
            }, rej);
        });
    },

    getSelections: function ({topic, domain}) {
        return executeTransaction((tx, res, rej) => {
            tx.executeSql(queries.getSelections, [domain, topic], (tx, sql_res) => {
                res(_.toArray(sql_res.rows));
            }, rej);
        });
    },

    saveTopic: function (topic) {
        return executeTransaction((tx, res, rej) => {
            tx.executeSql(queries.insertTopic, [topic], (tx, sql_res) => {
                res(sql_res.rows[0]);
            }, rej);
        });
    },

    setActiveTopic: function (rowid) {
        return executeTransaction((tx, res, rej) => {
            tx.executeSql(queries.clearActiveTopic);
            tx.executeSql(queries.setActiveTopic, [rowid], (tx, sql_res) => {
                res(sql_res.rows[0]);
            }, rej);
        });
    },

    getActiveTopic: function () {
        return executeTransaction((tx, res, rej) => {
            tx.executeSql(queries.getActiveTopic, [], (tx, sql_res) => {
                res(sql_res.rows[0]);
            }, rej);
        });
    },

    getTopics: function () {
        return executeTransaction((tx, res, rej) => {
            tx.executeSql(queries.getTopics, [], (tx, sql_res) => {
                res(_.toArray(sql_res.rows));
            }, rej);
        });
    },

    getDomains: function () {
        return executeTransaction((tx, res, rej) => {
            tx.executeSql(queries.getDomains, [], (tx, sql_res) => {
                res(_.toArray(sql_res.rows));
            }, rej);
        });
    },
}