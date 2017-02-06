/**
 * Created by vlad.chirkov on 31.1.17.
 */
import angular from 'angular';
import angularTranslate from 'angular-translate';
import angularSanitize from 'angular-sanitize';
import common from '../common';

import topicListComponent from './topicListComponent'
import translate from './config/translate';

export default angular.module('topicList', [angularTranslate, angularSanitize, common])

    .component(topicListComponent.$name, topicListComponent)

    .config(translate)

    .name;