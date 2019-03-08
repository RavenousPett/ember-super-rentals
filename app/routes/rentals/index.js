import Route from '@ember/routing/route';
import EmberObject from '@ember/EmberO'

export default Route.extend({
    model() {

        return EmberObject.create({
            results: this.store.findAll('rental')
        });

    },
    afterModel({results}) {
        console.log(results.get('length'));
    },
    actions: {
        filterByCity(param) {
            const model = this.modelFor(this.routeName); // 'rentals.index'
            console.log('model', model);
            return this.store
            .query('rental', { city: param }).then((results) => {
                console.log('query results', results);
                model.set('results', results);
            });
        }
    }
});
