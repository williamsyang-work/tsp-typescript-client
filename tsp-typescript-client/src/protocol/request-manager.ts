
export class ServerStateManager {

    public static abortController: AbortController = new AbortController();
    public static serverStatus: boolean = true;
  
    public static cancelAllRequests(): void {
      ServerStateManager.abortController.abort();
      ServerStateManager.abortController = new AbortController();
    }

}
