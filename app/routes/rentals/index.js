import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('rental').then((results) => {
            return {results: results.get('content')};
        });
    },
    afterModel(data) {
        console.log('model data = ', data);
    },
    actions: {
        filterByCity(param) {
        if (param !== '') {
            return this.store
            .query('rental', { city: param }).then((results) => {
                return { query: param, results: results };
            });
        } else {
            return this.store
            .findAll('rental').then((results) => {
                return { query: param, results: results };
            });
        }
        }
    }
});
