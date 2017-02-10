export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return {
                todos: [
                    {id: 1, text: 'Faire du café', status: 'active', editing: false, description:'Un bon robusta', isVisible: 'hidden', file:''},
                    {id: 2, text: 'Faire le plein du Faucon Millenium', status: 'active', editing: false, description:'Direction Mos-Esley', isVisible: 'hidden', file:''},
                    {id: 3, text: 'Retrouver Chewbacca', status: 'active', editing: false, description:'', isVisible: 'hidden', file:''}
                ],
                filter: 'all'
            };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveStat = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        //Ignore write error
    }
}