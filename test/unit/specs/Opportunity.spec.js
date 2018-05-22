import Vue from 'vue'
import Opportunity from '../../../src/theme/Opportunity.vue'

describe('Opportunity.vue', () => {
  const createComponent = () => {
    const OpportunityConstructor = Vue.extend(Opportunity)
    const comp = new OpportunityConstructor({
      propsData: {
        link: 'http://www.acme.com'
      }
    }).$mount()
    return comp
  }

  it('should render the link', () => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.acme.com')
  })
  it('should update element\'s href when property link changes', (done) => {
    const comp = createComponent()
    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal('http://www.acme.com')

    comp.link = 'http://company.com'
    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
        .to.equal('http://company.com')
      done()
    })
  })
})
