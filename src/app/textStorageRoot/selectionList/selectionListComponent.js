/**
 * Created by vchirkov on 2/4/2017.
 */
import template from './selectionList.html';
import './selectionList.less';

/**
 * @binding selections {array}
 */
export default {
    $name: 'selectionList',
    bindings: {
        selections: '<'
    },
    templateUrl: template
};