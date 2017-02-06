export default ($stateProvider) => {
    $stateProvider
        .state('topicList', {
            component: 'topicList',
            resolve: {
                topics: (connector) => connector('get-topics')
            }
        });
}