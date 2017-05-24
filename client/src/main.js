import { default as ShamUI, DI } from 'sham-ui';
import controller from './controllers/main';
import audioService from './services/audio';

DI.bind( 'service:audio', audioService );

DI.bind( 'widget-binder', controller );

window.onload = () => {
    const UI = new ShamUI();
    UI.render.FORCE_ALL();
};