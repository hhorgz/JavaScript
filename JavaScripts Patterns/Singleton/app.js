const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({ name: 'Brad' });
        return object;
    }

    return {
        getInstance: function() {
            if(!instance){ 
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const InstanceA = Singleton.getInstance();
const InstanceB = Singleton.getInstance();

console.log(InstanceA === InstanceB);

// console.log(InstanceA);