export default {
    createSelectionTable: `CREATE TABLE IF NOT EXISTS SELECTION (
        selection TEXT, 
        url, 
        topic_id, 
        domain_id, 
        FOREIGN KEY (topic_id) REFERENCES TOPIC (rowid), 
        FOREIGN KEY (domain_id) REFERENCES DOMAIN (rowid)
    )`,
    createTopicTable: 'CREATE TABLE IF NOT EXISTS TOPIC (topic UNIQUE, active INTEGER DEFAULT 0)',
    createDomainTable: 'CREATE TABLE IF NOT EXISTS DOMAIN (domain UNIQUE)',
    insertDomain: `INSERT OR IGNORE INTO DOMAIN(domain) VALUES(?)`,
    insertSelection: `INSERT INTO SELECTION(selection, url, topic_id, domain_id) 
                      VALUES (?, ?, (SELECT rowid FROM TOPIC WHERE active = 1), (SELECT rowid FROM DOMAIN WHERE domain = ?))`,
    insertTopic: `INSERT OR IGNORE INTO TOPIC(topic, active) VALUES(?, 0)`,
    clearActiveTopic: `UPDATE TOPIC SET active = 0 WHERE active = 1`,
    setActiveTopic: `UPDATE TOPIC SET active = 1 WHERE rowid = ?`,
    getActiveTopic: `SELECT  rowid, topic, active FROM TOPIC WHERE active = 1`,
    getTopics: `SELECT rowid, topic, active FROM TOPIC`,
    getDomains: `SELECT rowid, domain FROM DOMAIN`,
    getSelections: `SELECT selection, url, topic, domain FROM SELECTION WHERE COALELSE(?, domain_id) AND topic_id
                    LEFT JOIN TOPIC ON SELECTION.topic_id = TOPIC.rowid
                    LEFT JOIN DOMAIN ON SELECTION.domain_id = DOMAIN.rowid`,
    deleteSelection: ``,
    deleteTopic: ``,
    deleteDomain: ``,
    selectTextSelections: ``,
    dropDomain: `DROP TABLE IF EXISTS DOMAIN`,
    dropTopic: `DROP TABLE IF EXISTS TOPIC`,
    dropSelection: `DROP TABLE IF EXISTS SELECTION`
};