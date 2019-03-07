import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // this.store.findAll('rental').then(results => {
        //     console.log('results = ', results);
        // });
        return {results: this.store.findAll('rental')};
    },
    afterModel(data) {
        console.log('model resolved');
        console.log('model data = ', data.results);
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
