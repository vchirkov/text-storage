/**
 * Created by vlad.chirkov on 1.2.17.
 */
import queries from './sql';
import _ from 'lodash';

const dbPromise = new Promise((res, rej) => {
    const db = openDatabase('text-storage', '1.0', 'text-storage database', 2 * 1024 * 1024);
    if (!db) {
        rej();
    }

    db.transaction(function (tx) {
        // tx.executeSql(queries.dropDomain);
        // tx.executeSql(queries.dropTopic);
        // tx.executeSql(queries.dropSelection);
        tx.executeSql(queries.createTopicTable);
        tx.executeSql(queries.createDomainTable);
        tx.executeSql(queries.createSelectionTable);
        res(db);
    });
});

export default {
    saveSelectionText: function ({selection, url}) {
        var tmpA = document.createElement('a');
        tmpA.href = url;

        return dbPromise.then((db) => {
            return new Promise((res, rej) => {
                db.transaction(function (tx) {
                    tx.executeSql(queries.insertDomain, [tmpA.hostname]);
                    tx.executeSql(queries.insertSelection, [selection, url, tmpA.hostname], (tx, sql_res) => {
                        res(sql_res.rows[0]);
                    }, rej);
                });
            });
        });
    },

    getSelections: function ({topic_id, domain_id}) {
        return new Promise((res, rej) => {
            db.transaction(function (tx) {
                tx.executeSql(queries.getSelections, [topic_id, domain_id], (tx, sql_res) => {
                    res(_.toArray(sql_res.rows));
                }, rej);
            });
        });
    },

    saveTopic: function (topic) {
        return dbPromise.then((db) => {
            return new Promise((res, rej) => {
                db.transaction(function (tx) {
                    tx.executeSql(queries.insertTopic, [topic], (tx, sql_res) => {
                        res(sql_res.rows[0]);
                    }, rej);
                });
            });
        });
    },

    setActiveTopic: function (rowid) {
        return dbPromise.then((db) => {
            return new Promise((res, rej) => {
                db.transaction(function (tx) {
                    tx.executeSql(queries.clearActiveTopic);
                    tx.executeSql(queries.setActiveTopic, [rowid], (tx, sql_res) => {
                        res(sql_res.rows[0]);
                    }, rej);
                });
            });
        });
    },

    getActiveTopic: function () {
        return dbPromise.then((db) => {
            return new Promise((res, rej) => {
                db.transaction(function (tx) {
                    tx.executeSql(queries.getActiveTopic, [], (tx, sql_res) => {
                        res(sql_res.rows[0]);
                    }, rej);
                });
            });
        });
    },

    getTopics: function () {
        return dbPromise.then((db) => {
            return new Promise((res, rej) => {
                db.transaction(function (tx) {
                    tx.executeSql(queries.getTopics, [], (tx, sql_res) => {
                        res(_.toArray(sql_res.rows));
                    }, rej);
                });
            });
        });
    },

    getDomains: function () {
        return dbPromise.then((db) => {
            return new Promise((res, rej) => {
                db.transaction(function (tx) {
                    tx.executeSql(queries.getDomains, [], (tx, sql_res) => {
                        res(_.toArray(sql_res.rows));
                    }, rej);
                });
            });
        });
    },
}