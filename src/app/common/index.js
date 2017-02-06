/**
 * Created by vlad.chirkov on 2.2.17.
 */

import conectorService from './conectorService';
import topicsService from './topicsService';
import domainsService from './domainsService';
import selectionsService from './selectionsService';

/**
 * communicational module
 * @module common
 *
 * @service {connector} - basic service to communicate with background
 * @service {topics} - service to manage topics from background
 * @service {domains} - service to manage domains from background
 * @service {selections} - service to manage selections from background
 */
export default angular.module('common', [])

    .service(conectorService.$name, conectorService)

    .service(topicsService.$name, topicsService)

    .service(domainsService.$name, domainsService)

    .service(selectionsService.$name, selectionsService)

    .name ;