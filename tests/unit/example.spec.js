import { mount } from '@vue/test-utils';
import EditPage from '@/components/EditPage.vue';
import Quasar from 'quasar';
import router from '@/router'


const wrapper = mount(EditPage);
describe('EditPage.vue', () => {
 
  it('renders q-btn', () => {
        expect(wrapper.html()).toContain("q-btn");

  }); 

  it('renders has a method', () => {
    const res = new Promise((resolve)=> {
      resolve({})
    })
    const wrapper = mount(EditPage, {
      global:{
        plugins:[Quasar, router]
      }
    })
    expect(wrapper.vm.editcurrency()).toStrictEqual(res)
  })


});