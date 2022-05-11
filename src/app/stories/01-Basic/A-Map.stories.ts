import { Story, Meta, moduleMetadata, storiesOf } from '@storybook/angular';
import { NgLeafletModule, MapComponent } from '@mugan86/ng-leaflet';

export default {
    title: 'Map Basics/1-Map',
    component: MapComponent,
    decorators: [
        moduleMetadata({
            imports: [NgLeafletModule],
        }),
    ]
} as Meta;

const Template: Story<MapComponent> = (args: MapComponent) => ({
    props: args,
});

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
    mapId: 'default__map'
};

Default.parameters = {
    docs: {
      source: {
        mapId: 'Your code snippet goes here.'
      },
    },
  };