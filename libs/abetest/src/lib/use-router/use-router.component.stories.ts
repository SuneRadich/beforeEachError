import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { UseRouterComponent } from './use-router.component';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<UseRouterComponent> = {
  component: UseRouterComponent,
  title: 'UseRouterComponent',
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<UseRouterComponent>;

export const Primary: Story = {
  args: {},
};
