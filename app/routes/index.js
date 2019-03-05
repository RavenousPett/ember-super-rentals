import Route from '@ember/routing/route';
import {Promise} from 'rsvp';

export default Route.extend({
    beforeModel() {
        return new Promise((res) => {
            setTimeout(() => {
                console.log(1)
                res()
            }, 2000)
        })
        console.log(1);
        // this.replaceWith('rentals');
    },
    model() {
       return {
           name: 'Gabor'
       }
    }, 
    afterModel(model) {
        console.log(model)
        console.log(3);
    }
});
