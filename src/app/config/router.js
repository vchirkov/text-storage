/**
 * navigate to text-storage-root as soon as
 * topics and domains are fetched
 * @param $stateProvider {service}
 */
export default ($stateProvider) => {
    $stateProvider
        .state('textStorageRoot', {
            component: 'textStorageRoot',
            resolve: {
                topics: ['topics', (topics) => topics.get()],
                domains: ['domains', (domains) => domains.get()]
            }
        });
}