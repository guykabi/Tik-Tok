import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import axios from '../app/api/api-instance';


const authZuStore = (set: any) => ({
  userProfile: null,
  allUsers: [],
  
  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),

  fetchAllUsers: async () => {
    const response = await axios.get('users');
    console.log('All users:', response);
    
    set({ allUsers: response.data });
  },
});

const useAuthStore = create((
  persist(authZuStore, {
    name: 'auth',
  })
));

export default useAuthStore;