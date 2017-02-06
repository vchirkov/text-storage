/**
 * Created by vlad.chirkov on 31.1.17.
 */
import connector from './connector';
import db from './db';


// tmp
Promise.all([db.saveTopic('asdf'), db.saveTopic('qwerty'), db.saveTopic('zxcv')])
    .then(() => db.getTopics())
    .then((topics) => db.setActiveTopic(topics[1].rowid));


connector.on('save-selection', (selection, {url}) => {
    db.saveSelectionText({selection, url});
});

connector.on('get-topics', (data, sender, res) => {
    db.getTopics()
        .then(res);
});

connector.on('get-domains', (data, sender, res) => {
    db.getDomains()
        .then(res);
});

connector.on('save-topic', (topic, sender, res) => {
    db.saveTopic(topic)
        .then(() => db.getTopics())
        .then(res);
});

connector.on('set-active-topic', (topic, sender, res) => {
    db.setActiveTopic(topic.rowid)
        .then(() => db.getTopics())
        .then(res);
});