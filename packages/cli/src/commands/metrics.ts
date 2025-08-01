import { Args } from '@oclif/core';

import { DevvitCommand } from '../util/commands/DevvitCommand.js';
import { optInMetrics, optOutMetrics } from '../util/metrics.js';
import type { BuildMode } from '../util/project.js';

export default class Metrics extends DevvitCommand {
  static override description = 'Turn CLI metrics collection on or off';

  static override args = {
    status: Args.string({
      description: 'Do you want to turn on or off metrics collection?',
      required: true,
      options: ['on', 'off'],
    }),
  } as const;

  override init(_mode?: BuildMode | 'None'): Promise<void> {
    // We don't need to initialize the project for the metrics command.
    return super.init('None');
  }

  async run(): Promise<void> {
    const { args } = await this.parse(Metrics);

    if (args.status === 'on') {
      await optInMetrics();
      this.log('Metrics are now enabled');
    } else {
      await optOutMetrics();
      this.log('Metrics are now disabled');
    }
  }
}
