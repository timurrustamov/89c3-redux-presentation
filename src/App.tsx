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
import History from './components/History'

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
            <Step steps={5}>
              <History />
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
                  'State unique et immutable',
                  'Actions décrivent les changements',
                  'Reducers appliquent les changements'
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
                  'Trouver le State défaillant',
                  'Verifier l\'Action',
                  'Patcher le Reducer',
                  'Écrire un test'
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
            <div>
              <img
                alt="[Here was once a schema image]"
                style={{ height: '7em' }}
                src="images/redux-schema.gif" />
            </div>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <Chapter title="Actions" subtitle={`type Action<T> = {
                  type: string,
                  payload: T
                }`}/>
            </Step>
            <Code backgroundcolor="#1E1F21">{Impl.Action}</Code>
            <Code backgroundcolor="#1E1F21">{Impl.TrixAction}</Code>
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
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <h3>Les connecteurs</h3>
            </Step>
            <Library icon="🕶" name="ngrx/store"/>
            <Library icon="🛡" name="angular-redux/store" />
            <Library icon="⚙️" name="reactjs/react-redux" />
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <h3>Le pattern</h3>
            </Step>
            <Code backgroundcolor="#1E1F21">{Impl.React}</Code>
            <div>
              <h3 style={{ color: '#7453A9' }}>Redux</h3>
              <ul style={{ padding: 0, fontSize: '0.7em', listStyleType: 'none'}}>
                <li>Déclaratif</li>
                <li>Facile a comprendre et a maîtriser</li>
                <li>Pas de galère pour tester</li>
                <li>Peut combiner de la data locale et distante</li>
                <li>Une expérience de dev :)</li>
              </ul>
            </div>
            <Step fontcolor="#fff" backgroundcolor="#1E1F21">
              <h3>Des vraies libraries</h3>
            </Step>
            <Library icon="♻️" name="ReactiveX/rxjs"/>
            <Library icon="📦" name="mobxjs/mobx"/>
            <Library icon="👨‍🎓" name="cerebral/cerebral"/>
            <Step fontcolor="#7453A9">
              <h2>Merci</h2>
              <h3>Questions ?</h3>
            </Step>
          </Root>
        </Provider>
      </Radium.StyleRoot>
    )
  }
}

export default App
