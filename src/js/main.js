// import '../../node_modules/grapesjs/dist/css/grapes.min.css';
import '../../node_modules/grapesjs/src/styles/scss/main.scss';
import grapesjs from 'grapesjs';

// import '../../node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import '../../node_modules/grapesjs-preset-webpage/src/style/main.scss';
import * as preset from 'grapesjs-preset-webpage';

import '../css/main.css';

var editor = grapesjs.init({
	container: '#gjs',
	plugins: ['gjs-preset-webpage'],
	pluginsOpts: {
		'gjs-preset-webpage': {},
	},
	blockManager: {
		blocks: [
			{
				id: 'config-object-defined-block',
				label: '<b>Config object defined block</b>',
				category: 'Basic',
				attributes: { class: 'gjs-config-object-defined-block' },
				content: `<section>
					<h1>Block defined in the config object</h1>
					<div>This is the simplest way to define a GrapesJS Block.</div>
				</section>`,
			},
		],
	},
});

editor.BlockManager.add('component-style-block', {
	label: 'Component style block',
	category: 'Basic',
	content: {
		attributes: { class: 'gjs-component-style-block' },
		tagName: 'div',
		draggable: true,
		components: [
			{
				tagName: 'span',
				content: '<b>The content of the Component style Block</b>',
			},
			{
				tagName: 'div',
				// use `content` for static strings, `components` string will be parsed
				// and transformed in Components
				components: '<span>Sub components</span>',
			},
		],
	},
});

var panelManager = editor.Panels;
var panels = panelManager.getPanels();

console.log('panels:', panels);

panelManager.addPanel({
	id: 'titlePanel',
	visible: true,
	buttons: [],
	content: `<span>GrapesJS React component feasibility research</span>`,
});

console.log('panels (after adding `titlePanel`):', panels);
