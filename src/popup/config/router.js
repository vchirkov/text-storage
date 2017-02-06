/**
 * navigate to topic list root as soon as topics are fetched
 * @param $stateProvider {service}
 */
export default ($stateProvider) => {
    $stateProvider
        .state('topicList', {
            component: 'topicList',
            resolve: {
                topics: (connector) => connector('get-topics')
            }
        });
}