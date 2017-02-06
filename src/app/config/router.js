export default ($stateProvider) => {
    $stateProvider
        .state('textStorageRoot', {
            component: 'textStorageRoot',
            resolve: {
                topics: (connector) => connector('get-topics'),
                domains: (connector) => connector('get-domains')
            }
        });
}