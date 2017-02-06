import template from './textStorageRoot.html';
import './textStorageRoot.less';

class textStorageRootController {
    constructor(connector) {
        this.connector = connector;
    }

    $onInit() {
        debugger;
    }
}

export default {
    $name: 'textStorageRoot',
    bindings: {
        topics: '<',
        domains: '<'
    },
    controller: textStorageRootController,
    templateUrl: template
};