import AbortController from "abort-controller";

export class RequestManager {
    private static globalController: AbortController = new AbortController();
  
    public static getGlobalController(): AbortController {
      return RequestManager.globalController;
    }
  
    public static cancelAllRequests(): void {
      console.log('new cancel code');
      RequestManager.globalController.abort();
      RequestManager.globalController = new AbortController();
    }
}
