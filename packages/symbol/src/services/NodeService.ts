import { NodeInfoDTO, NodeRoutesApi, Configuration } from 'symbol-rest/dist/';

export default class AccountService {
  static async getNodeInfo (node: string): Promise<NodeInfoDTO> {
    const config = new Configuration({
      basePath: node,
    });
    const nodeRoutesApi = new NodeRoutesApi(config);  
    const nodeInfo = await nodeRoutesApi.getNodeInfo()
    return nodeInfo;
  }
}
