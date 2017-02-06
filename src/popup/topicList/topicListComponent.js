import template from './topicList.html';
import addTopicIcon from './resources/svg/add-topic.svg'
import './topicList.less';

class topicListController {
    constructor(connector) {
        this.connector = connector;
        this.addTopicIcon = addTopicIcon;
    }

    setActiveTopic(topic) {
        this.connector('set-active-topic', topic)
            .then((topics) => {
                this.topics = topics;
            });
    }

    addTopic(topic) {
        this.connector('save-topic', topic)
            .then((topics) => {
                this.topics = topics;
                this.topicName = '';
            });
    }

    openApp() {
        let optionsUrl = chrome.extension.getURL('/app/index.html');

        chrome.tabs.query({url: optionsUrl}, (tabs) => {
            if (tabs.length) {
                chrome.tabs.update(tabs[0].id, {active: true});
            } else {
                chrome.tabs.create({url: optionsUrl});
            }
        });
    }
}

export default {
    $name: 'topicList',
    bindings: {
        topics: '<'
    },
    controller: topicListController,
    templateUrl: template
};