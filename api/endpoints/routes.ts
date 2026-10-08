//This file contains all the routes that are used in the application

export const routes = {

    /* PET ROUTES */
    //This is the route that is used to get all the users
    getPetById: (petId: number) => `/v2/pet/${petId}`,
    //This is the route that is used to add a pet to the store
    addPetToStore:`/v2/pet`,
    //This is the route that is used to delete a pet from the store
    removePetFromStore: (petId: number) => `/v2/pet/${petId}`,
    //this is the route that is used to update a pet in the store [Partial update]
    updatePetInStore: (petId: number) => `/v2/pet`,        


    /* STORE ROUTES */
    //This is the route that is used to get all the users
    getStoreById: (storeId: number) => `/v2/store/order/${storeId}`,
    //This is the route that is used to delete a pet from the store
    removeStoreFromStore: (storeId: number) => `/v2/store/order/${storeId}`,
    //this is the route that is used to update a pet in the store [Partial update]
    updateStoreInStore: (storeId: number) => `/v2/store/order`,
    //This is the route that is used to add a pet to the store
    addOrderToStore:`/v2/store/order`,
    
     /* UPLOAD FILE ROUTES */
     //This is the route that is used to upload a file
     uploadFile:(id:number) => `/v2/pet/${id}/uploadImage`
}