import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { MapComponent, NgLeafletModule } from '@mugan86/ng-leaflet';

export default {
    title: 'Basic/Map',
    component: MapComponent,
    decorators: [
        moduleMetadata({
            imports: [NgLeafletModule],
        }),
    ],
} as Meta;

const Template: Story<MapComponent> = (args: MapComponent) => ({
    props: args,
});

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
    size: {
        width: '100%',
        height: '500px'
    }
};