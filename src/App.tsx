import * as React from 'react'
import * as Radium from 'radium'
import { Provider } from 'react-redux'
import { Col, Row } from 'react-flexbox-grid'

import store from './store'

import Root from './components/Root'
import Step from './components/Step'
import List from './components/List'
import Code from './components/Code';
import Welcome from './components/Welcome'
import Evolution from './components/Evolution'
import FeaturesAnimated from './components/FeaturesAnimated'
import Premonition from './components/Premonition'
import TreeView from './components/TreeView'
import State from './components/State'
import Library from './components/Library'
import Chapter from './components/Chapter'

import * as Impl from './misc/codes-and-implementations'

class App extends React.Component {
  render() {
    return (
      <Radium.StyleRoot>
        <Provider store={store}>
          <Root defaultFontColor="#1E1F21" defaultBackgroundColor="#fff">
            <Step steps={2}>
              <Welcome/>
            </Step>
            <Step steps={2} clickable>
              <Evolution/>
            </Step>
            <h4>Pourquoi ce succès ?</h4>
            <FeaturesAnimated/>
            <Code
              backgroundcolor="#1E1F21"
              highlightedLines={[null, [5, 6], [19], [21], [15], [9], [10], null]}>
              {Impl.Redux}
            </Code>
            <Step steps={2}><FeaturesAnimated/></Step>
            <Premonition/>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <h4>Constraints & Contracts</h4>
            </Step>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <List
                title="Redux Constraints"
                points={[
                  'State Unique et Immutable',
                  'Actions Décrivent les Changements',
                  'Reducers Appliquent les Changements'
                ]}/>
            </Step>
            <Code backgroundcolor="#1E1F21">{Impl.State}</Code>
            <Step backgroundcolor="#2a2f3a" fontcolor="#67a2be">
              <State />
            </Step>
            <TreeView />
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <List
                title="Debug Workflow"
                points={[
                  'Log des Actions et du State',
                  'Trouver le State Défaillant',
                  'Verifier l\'Action',
                  'Patcher le Reducer',
                  'Ecrire un Test'
                ]}/>
            </Step>
            <Step backgroundcolor="#1E1F21" fontcolor="#fff">
              <List
                title="Tout est POJO"
                points={[
                  'Persistance',
                  'Rendering universel',
                  'Mutations optimistes',
                  'Network-enabled par defaut'
                ]}
              />
            </Step>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <List
                title="Redux Contracts"
                points={['Actions', 'Reducers', 'Selectors', 'Middleware']}/>
            </Step>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">            
              <Chapter title="Actions" subtitle={`type Action<T> = {
                  type: string,
                  payload: T
                }`}/>
            </Step>
            <Code backgroundcolor="#1E1F21">{Impl.Action}</Code>
            <Code backgroundcolor="#1E1F21">{Impl.TrixAction}</Code>
            <Library icon="🕶" iconStyle={{ fontSize: '3em', paddingBottom: 0 }} name="ngrx/store"/>            
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <Chapter title="Reducers" subtitle={`(state: State, action: Action) => State`} />
            </Step>
            <Code backgroundcolor="#1E1F21">{Impl.Reducer}</Code>
            <Code backgroundcolor="#1E1F21">{Impl.ComposableReducer}</Code>
            <Code backgroundcolor="#1E1F21">{Impl.CombineReducers}</Code>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <Chapter title="Selectors" subtitle={`(state, ...args) => derivation`} />
            </Step>
            <Code backgroundcolor="#1E1F21">{Impl.Reselect}</Code>
            <Library icon="🛡" name="angular-redux/store" />
            <Library icon="🍬" name="reactjs/reselect" />
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <Chapter title="Higher Order Reducers" subtitle={`(reducer, ...args) => reducer`} />
            </Step>
            <Code backgroundcolor="#1E1F21">{Impl.Undoable}</Code>
            <Library icon="🖋" name="davidkpiano/react-redux-form" />
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <Chapter title="Middleware" subtitle={`store => next => action => any`} />
            </Step>
            <Code backgroundcolor="#1E1F21">{Impl.Middleware}</Code>
            <Library icon="💾" name="elgerlambert/redux-localstorage" />
            <Library icon="🔎" name="redux-observable/redux-observable" />
            <Library icon="☕" name="zalmoxisus/redux-devtools-extension" />
            <h3>Meme sans Redux, le pattern est la!</h3>
            <Code backgroundcolor="#1E1F21">{Impl.React}</Code>
            <div>
              <h3>Pourquoi Redux?</h3>
              <ul style={{ fontSize: '0.7em', listStyleType: 'none'}}>
                <li>Declaratif</li>
                <li>Facile a comprendre et a maitriser</li>
                <li>Pas de galere pour tester</li>
                <li>Peut combiner de la data locale et distante</li>
                <li>Une experience de dev :)</li>
              </ul>
            </div>
          </Root>
        </Provider>
      </Radium.StyleRoot>
    )
  }
}

export default App
