import Route from '@ember/routing/route';
import EmberObject from '@ember/object'

export default Route.extend({
    model() {
        return EmberObject.create({
            results: this.store.findAll('rental')
        });
    },
    actions: {
        filterByCity(param) {
            const model = this.modelFor(this.routeName); // 'rentals.index'

            return this.store
            .query('rental', { city: param }).then((results) => {
                model.set('results', results);
            });
        }
    }
});
