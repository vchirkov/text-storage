/**
 * Created by vlad.chirkov on 2.2.17.
 */

import conectorService from './conectorService';

export default angular.module('common', [])

    .service(conectorService.$name, conectorService)

    .name ;