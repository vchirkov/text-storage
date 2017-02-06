export default {
    // create table
    createTopicTable: 'CREATE TABLE IF NOT EXISTS TOPIC (topic UNIQUE, active INTEGER DEFAULT 0)',
    createDomainTable: 'CREATE TABLE IF NOT EXISTS DOMAIN (domain UNIQUE)',
    createSelectionTable: `CREATE TABLE IF NOT EXISTS SELECTION (
        selection TEXT, 
        url, 
        topic_id, 
        domain_id, 
        FOREIGN KEY (topic_id) REFERENCES TOPIC (rowid), 
        FOREIGN KEY (domain_id) REFERENCES DOMAIN (rowid)
    )`,
    // create row
    insertDomain: `INSERT OR IGNORE INTO DOMAIN(domain) VALUES(?)`,
    insertTopic: `INSERT OR IGNORE INTO TOPIC(topic, active) VALUES(?, 0)`,
    insertSelection: `INSERT INTO SELECTION(selection, url, topic_id, domain_id) 
                      VALUES (?, ?, (SELECT rowid FROM TOPIC WHERE active = 1), (SELECT rowid FROM DOMAIN WHERE domain = ?))`,
    //reset active
    clearActiveTopic: `UPDATE TOPIC SET active = 0 WHERE active = 1`,
    setActiveTopic: `UPDATE TOPIC SET active = 1 WHERE rowid = ?`,
    //get active topic
    getActiveTopic: `SELECT  rowid, topic, active FROM TOPIC WHERE active = 1`,
    // get lists
    getTopics: `SELECT rowid, topic, active FROM TOPIC`,
    getDomains: `SELECT rowid, domain FROM DOMAIN`,
    getSelections: `SELECT selection, url, topic, domain FROM SELECTION 
                    LEFT JOIN TOPIC ON SELECTION.topic_id = TOPIC.rowid
                    LEFT JOIN DOMAIN ON SELECTION.domain_id = DOMAIN.rowid
                    WHERE domain_id=IFNULL(?, domain_id) AND topic_id=?`,
    //delete item
    deleteSelection: ``,// TODO
    deleteTopic: ``,// TODO
    deleteDomain: ``,// TODO
    // drop
    dropDomain: `DROP TABLE IF EXISTS DOMAIN`,
    dropTopic: `DROP TABLE IF EXISTS TOPIC`,
    dropSelection: `DROP TABLE IF EXISTS SELECTION`
};