import template from './textStorageRoot.html';
import './textStorageRoot.less';

/**
 * text-storage-root-controller
 * handles topic and domain selection
 * and applies them changes to selection list
 */
class textStorageRootController {
    /**
     *
     * @param $state - to navigate to selection list
     */
    constructor($state) {
        this.$state = $state;
    }

    /**
     * set currently selected topic and domain form local storage
     * if topic is not selected, set first in list
     *
     * then navigate to selection list filtered by selections
     */
    $onInit() {
        this.currentTopic = parseInt(localStorage.getItem('currentTopic'), 10) || this.topics[0].rowid;
        this.currentDomain = parseInt(localStorage.getItem('currentDomain'), 10);

        this.loadSelections();
    }

    /**
     * navigate to selection list with current filters
     */
    loadSelections() {
        this.$state.go('textStorageRoot.selectionList', {
            topic: this.currentTopic,
            domain: this.currentDomain
        });
    }

    /**
     * change current topic on click if not current was clicked
     * @param topic
     */
    onTopicClick(topic) {
        if (topic.rowid === this.currentTopic) {
            return;
        }

        this.currentTopic = topic.rowid;
        localStorage.setItem('currentTopic', this.currentTopic);
        this.loadSelections();
    }

    /**
     * change current domain on click.
     * if current domain was clicked, deselect current domain
     * to apply filter for all domains
     *
     * @param domain
     */
    onDomainClick(domain) {
        if (domain.rowid === this.currentDomain) {
            this.currentDomain = null;
        } else {
            this.currentDomain = domain.rowid;
        }

        localStorage.setItem('currentDomain', this.currentDomain);
        this.loadSelections();
    }
}
/**
 * @binding topics {array}
 * @binding domains {array}
 */
export default {
    $name: 'textStorageRoot',
    bindings: {
        topics: '<',
        domains: '<'
    },
    controller: textStorageRootController,
    templateUrl: template
};