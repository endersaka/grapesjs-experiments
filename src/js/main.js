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
				id: 'fucking_section',
				category: 'Basic',
				label: '<b>fucking section</b>',
				attributes: { class: 'gjs-fucking-section' },
				content: `<section>
					<h1>Fucking section</h1>
					<div>Ehi! This is a fucking section.</div>
				</section>`,
			},
		],
	},
});

editor.BlockManager.add('my-block-id', {
	label: 'Another fucking block',
	category: 'Basic',
	content: {
		attributes: { class: 'gjs-another-fucking-block' },
		tagName: 'div',
		draggable: true,
		components: [
			{
				tagName: 'span',
				content: '<b>Some static content</b>',
			},
			{
				tagName: 'div',
				// use `content` for static strings, `components` string will be parsed
				// and transformed in Components
				components: '<span>HTML at some point</span>',
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

console.log('panels:', panels);
