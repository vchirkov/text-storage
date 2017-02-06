import template from './topicList.html';
import addTopicIcon from './resources/svg/add-topic.svg'
import './topicList.less';

/**
 * topic list controller, to list, add topics and set active
 */
class topicListController {
    /**
     * set connector and add icon
     * @param connector
     */
    constructor(connector) {
        this.connector = connector;
        this.addTopicIcon = addTopicIcon;
    }

    /**
     * try and set new topic as active, update list on success
     * @param topic
     */
    setActiveTopic(topic) {
        this.connector('set-active-topic', topic)
            .then((topics) => {
                this.topics = topics;
            });
    }

    /**
     * add topic and update list
     * @param topic
     */
    addTopic(topic) {
        this.connector('save-topic', topic)
            .then((topics) => {
                this.topics = topics;
                this.topicName = '';
            });
    }

    /**
     * open or navigate to options page in case user clicked 'open app' control
     */
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
/**
 * @binding topics {array} list of topics
 */
export default {
    $name: 'topicList',
    bindings: {
        topics: '<'
    },
    controller: topicListController,
    templateUrl: template
};