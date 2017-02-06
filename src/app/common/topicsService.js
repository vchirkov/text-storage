/**
 * Created by vlad.chirkov on 3.2.17.
 */
import _ from 'lodash';

connector.$name = 'connector';
export default function connector(connector) {
    var topicsPromise = connector('get-topics');
    return {
        get: (id) => {
            if (id) {
                return topicsPromise.then((topics) => _.find({rowid: id}));
            }
            return topicsPromise;
        }
    }
}