/**
 * Created by vlad.chirkov on 31.1.17.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularTranslate from 'angular-translate';
import angularSanitize from 'angular-sanitize';
import common from './common';
import './index.less';

import topicList from './topicList';

import translate from './config/translate';
import router from './config/router';

export default angular.module('popup', [uiRouter, angularTranslate, angularSanitize, common, topicList])

    .config(translate)

    .config(router)

    .run(($state) => $state.go('topicList'))

    .name;