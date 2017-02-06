/**
 * Created by vlad.chirkov on 31.1.17.
 */
import connector from './connector';
import db from './db/db';

// initial setup, just for me
// three topics nd first one is active
Promise.all([
    db.saveTopic('General'),
    db.saveTopic('Programming'),
    db.saveTopic('Other')
])
    .then(() => db.getTopics())
    .then((topics) => db.setActiveTopic(topics[0].rowid));

/**
 * get all topics
 *
 * Resolves: list of topics [{active, topic, rowid}]
 */
connector.on('get-topics', (data, sender, res) => {
    db.getTopics().then(res);
});

/**
 * get all domains
 *
 * Resolves: list of domains [{domain, rowid}]
 */
connector.on('get-domains', (data, sender, res) => {
    db.getDomains()
        .then(res);
});

/**
 * returns all selections for options: {domain: rowid, topic: rowid}
 * if domain is null, return selections for all domains
 *
 * Resolves: list of selections [{selection, domain, topic, url, rowid}]
 */
connector.on('get-selections', (data, sender, res) => {
    db.getSelections(data)
        .then(res);
});

/**
 * save selection text for specific url
 * Each selection is saved for specific topic and specific domain.
 * If domain doesn't exist yet, new one is created.
 *
 * Resolves: selection saved with rowid
 */
connector.on('save-selection', (selection, {url}, res) => {
    db.saveSelectionText({selection, url}).then(res);
});

/**
 * Saves topic
 *
 * Resolves: list of topics [{topic, rowid}]
 */

connector.on('save-topic', (topic, sender, res) => {
    db.saveTopic(topic)
        .then(() => db.getTopics())
        .then(res);
});

/**
 * Sets new topic to active
 *
 * Resolves: list of topics [{topic, rowid}]
 */

connector.on('set-active-topic', (topic, sender, res) => {
    db.setActiveTopic(topic.rowid)
        .then(() => db.getTopics())
        .then(res);
});