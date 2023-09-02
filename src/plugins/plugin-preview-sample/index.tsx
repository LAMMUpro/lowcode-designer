import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button, Message } from '@alifd/next';
import {
  updatePageInfo
} from '../../services/pageManage';

// 保存功能示例
const PreviewSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      const doPreview = () => {
        const schemaId = config.get('schemaId');
        if (!schemaId) return Message.warning("没有选中页面!");

        updatePageInfo();
        setTimeout(() => {
          const search = `?nodeId=${config.get('nodeId')}`; //location.search ? `${location.search}&scenarioName=${scenarioName}` : `?scenarioName=${scenarioName}`;
          window.open(`./preview.html${search}`);
        }, 500);
      };
      skeleton.add({
        name: 'previewSample',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'right',
        },
        content: (
          <Button type="primary" onClick={doPreview}>
            预览
          </Button>
        ),
      });
    },
  };
}
PreviewSamplePlugin.pluginName = 'PreviewSamplePlugin';
PreviewSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default PreviewSamplePlugin;