import Fyd from './lib/fyd';
import './lib/polyfill/index';

module.exports = (f) => new Fyd(f);