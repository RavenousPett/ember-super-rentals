import Route from '@ember/routing/route';


 users => cars

export default Route.extend({
    model() {
        return this.store.findAll('rental').then(results => {
            return {results: results};
        });
    },
    afterModel({results}) {
        console.log(results.get('length'));
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
