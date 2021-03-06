var e = {
    Invalid: 0,
    ListFile: 51,
    TransListFile: 52,
    ExtractFile: 53,
    TransExtractFile: 54,
    ConvertOfficeToHtml: 100,
    ConvertOfficeToPic: 101,
    DownloadAndConvertOffice: 102,
    DocviewPreviewFile: 103,
    DocviewGetPreview: 104,
    DocviewConvertFile: 105,
    DownloadFile: 106,
    KeyValueSet: 200,
    KeyValueGet: 201,
    KeyValueDel: 202,
    KeyValueAppend: 203,
    KeyValueDeppend: 204,
    KeyValueOverwrite: 205,
    KeyValueInsert: 206,
    KeyValueGetConfig: 220,
    KeyValueGetIndex: 221,
    KeyValueGetList: 222,
    KeyValueClearUser: 223,
    QzaShareAddShare: 300,
    QzaShareAddShareV2: 301,
    FileTransPieceMsg: 500,
    FileQueryOffsetMsg: 501,
    FileDiffUploadMsg: 580,
    FileDiffUploadConfParamMsg: 581,
    WyShareAdd: 600,
    WyShareGetDownInfo: 601,
    UnionActivityFileUpload: 620,
    UnionActivityFileCopy: 621,
    WyUserLogin: 700,
    WyUserUploadFile: 701,
    TestMsg: 710,
    ClientFileTransQueryMsg: 1001,
    ClientFileTransPieceMsg: 1011,
    VirtualDirConfigSet: 2001,
    VirtualDirConfigGet: 2002,
    VirtualDirConfigDelete: 2003,
    VirtualDirDirList: 2004,
    VirtualDirFileUpload: 2005,
    VirtualDirFileDownload: 2006,
    VirtualDirBatchItemDelete: 2007,
    VirtualDirBatchFileMove: 2008,
    VirtualDirBatchFileCopy: 2009,
    VirtualDirBatchFileDownload: 2010,
    VirtualDirUserQuery: 2011,
    VirtualDirFileCopyFromOtherBid: 2012,
    VirtualDirFileCopyFromOtherBidBackend: 2013,
    VirtualDirBatchItemDeleteBackend: 2014,
    AccessVirtualDirDirList: 2101,
    AccessVirtualDirFileUpload: 2102,
    AccessVirtualDirFileDownload: 2103,
    AccessVirtualDirBatchFileDelete: 2104,
    AccessVirtualDirFileBatchDownload: 2105,
    DiskUserInfoGet: 2201,
    DiskUserInfoModify: 2202,
    DiskUserTimeStampGet: 2204,
    DiskFileBatchQuery: 2206,
    DiskFileHistoryQuery: 2207,
    DiskDirBatchList: 2209,
    DiskDirQuery: 2210,
    DiskDirRecurTimeStamp: 2211,
    DiskDirBatchQuery: 2212,
    DiskSystemKeyQuery: 2213,
    DiskUserConfigGet: 2225,
    DiskFileUpload: 2301,
    DiskFileContinueUpload: 2302,
    DiskFileOverWriteUpload: 2303,
    DiskFileBatchUpload: 2305,
    DiskFileDataUpload: 2311,
    DiskFileBatchDownload: 2402,
    DiskFilePackageDownload: 2403,
    DiskFileWeiyunSharePackageDownload: 2404,
    DiskFileDataDownload: 2411,
    DiskPicThumbDownload: 2412,
    DiskVideoThumbDownload: 2413,
    DiskFileDocDownloadAbs: 2414,
    DiskDirFileBatchDelete: 2505,
    DiskUserClear: 2506,
    DiskItemBatchDelete: 2507,
    DiskTempFileBatchDelete: 2508,
    DiskDirFileBatchDeleteEx: 2509,
    DiskFileCopy: 2603,
    DiskFileBatchCopy: 2604,
    DiskFileBatchRename: 2606,
    DiskFileRestoreVer: 2607,
    DiskFileDeleteVer: 2608,
    DiskFileCopyFromOtherBid: 2609,
    DiskFileBatchCopyFromOtherBid: 2610,
    DiskFileCopyToOtherBid: 2611,
    DiskFileBatchCopyToOtherBid: 2612,
    DiskFileBatchCopyToOffline: 2613,
    DiskDirCreate: 2614,
    DiskDirAttrModify: 2615,
    DiskDirFileBatchMove: 2618,
    DiskDirCreateByParents: 2619,
    DiskDirAttrBatchModify: 2620,
    DiskRecycleList: 2702,
    DiskRecycleClear: 2703,
    DiskRecycleDirFileBatchRestore: 2708,
    DiskRecycleDirFileClear: 2710,
    DiskPicUpload: 2801,
    DiskPicGroupDelete: 2802,
    DiskPicBackup: 2803,
    TestCellPhoneMsg: 3001,
    CellPhoneGetConfig: 3011,
    ExtractPicAndSave: 4001,
    ThirdGetListByAPP: 5001,
    ThirdFilePut: 5002,
    LibUserCreate: 6001,
    LibDirCreate: 6002,
    LibFileUpload: 6003,
    LibFileDel: 6004,
    LibFileMove: 6005,
    LibFileNameMod: 6006,
    LibFileOverwrite: 6007,
    LibDirDel: 6008,
    LibDirMove: 6009,
    LibDirNameMod: 6010,
    LibDirUndel: 6011,
    LibFileFinishedPush: 6012,
    LibFileUndel: 6013,
    LibUserClear: 6014,
    LibFileNameBatchMod: 6015,
    LibFileBatchMove: 6016,
    LibDirBatchCreate: 6017,
    LibDirNameBatchMod: 6020,
    LibFileBatchDel: 6021,
    LibDirFileBatchMove: 6022,
    LibFileBatchUndel: 6023,
    LibDirBatchDel: 6024,
    LibDirBatchMove: 6025,
    LibDirBatchUndel: 6026,
    LibFileCopy: 6027,
    LibFileBatchCopy: 6028,
    LibDirFileBatchRestore: 6029,
    LibDirFileBatchDel: 6030,
    LibFileContinueUpload: 6031,
    LibFileDownload: 6032,
    LibFileBatchDownload: 6033,
    LibFilePackageDownload: 6034,
    LibFileWeiyunSharePackageDownload: 6035,
    LibFileCopyFromOtherBid: 6036,
    LibFileBatchCopyFromOtherBid: 6037,
    LibFileCopyToOtherBid: 6038,
    LibFileBatchCopyToOtherBid: 6039,
    LibTempFileBatchDel: 6040,
    LibCombineBatchFileUpload: 6041,
    LibCombineBatchFileDel: 6042,
    LibPwdQuery: 6051,
    LibPwdAdd: 6052,
    LibPwdDelete: 6053,
    LibPwdModify: 6054,
    LibPwdVerify: 6055,
    LibBatchGetPicExif: 6061,
    LibMovePicToGroup: 6062,
    LibFileAddStar: 6063,
    LibFileRemoveStar: 6064,
    LibTransPicGroup: 6065,
    LibNotifyExifInfo: 6066,
    LibRebuildLib: 6071,
    LibListNumGet: 6101,
    LibAllListGet: 6102,
    LibDiskAllListGet: 6103,
    LibLibSearch: 6104,
    LibPdirKeyGet: 6105,
    LibDiffListGet: 6106,
    LibDiskDiffListGet: 6107,
    LibDiskDiffDirGet: 6108,
    LibGetDiffStarFile: 6109,
    LibPicDiffListGet: 6110,
    LibPageListGet: 26111,
    LibGetPicGroup: 26121,
    LibCreatePicGroup: 26122,
    LibModPicGroup: 26123,
    LibDeletePicGroup: 26124,
    LibGetOneGroupInfo: 6125,
    LibGetDelList: 6126,
    LibSetGroupCover: 26127,
    LibSetGroupOrder: 26128,
    LibGetAllFolderInfo: 6129,
    LibDirList: 6130,
    LibRecycleList: 6131,
    LibRecycleClear: 6132,
    LibQueryBackupPhoto: 6133,
    LibPicBatchQuery: 6140,
    LibBatchMovePicToGroup: 26201,
    LibBatchFileAddStar: 6202,
    LibBatchFileRemoveStar: 6203,
    Lib3DelRecentFileList: 26300,
    Lib3LibSearch: 224101,
    LibDirPathGet: 26150,
    LibImageTagGet: 26350,
    LibTagFileListPageGet: 26352,
    UnfinFileGetList: 7001,
    UnfinFileAddFile: 7002,
    UnfinFileFileFinish: 7003,
    UnfinFileOverwrite: 7004,
    QdiskUserCacheAdd: 8001,
    QdiskUserCacheGet: 8002,
    QdiskUserCacheDelete: 8003,
    QdiskUserSpaceAdd: 8004,
    QdiskUserQQDiskDirKeyMapGet: 8005,
    QdiskUserSpaceSet: 8006,
    PushUserLogin: 9001,
    PushUserLogout: 9002,
    PushHeartBeat: 9003,
    PushRecvMsg: 9004,
    PushInterUserLogin: 9101,
    PushInterUserLogout: 9102,
    PushInterHeartBeat: 9103,
    PushInterRecvMsg: 9104,
    PushInterStatusInfo: 9105,
    PushInterSendMsg: 9201,
    OidbGetUserCustomHead: 10001,
    OidbGetFriendsListAndGroupInfo: 10002,
    OidbGetFriendsInfoAndRecordName: 10003,
    OidbGetFriendsOnlineStatus: 10004,
    OidbPushOutlinkTips: 10005,
    OidbPushQQNetDiskTransTips: 10006,
    OidbGetQuickLaunchApps: 10007,
    OidbGetUserInfo: 10008,
    OidbGetQQVipInfo: 10030,
    PwdQuery: 11001,
    PwdAdd: 11002,
    PwdDelete: 11003,
    PwdModify: 11004,
    PwdVerify: 11005,
    WeiyunShareAdd: 12001,
    WeiyunShareView: 12002,
    WeiyunShareDownload: 12003,
    WeiyunShareTransStore: 12004,
    WeiyunShareSaveData: 12005,
    WeiyunShareSetMark: 12006,
    WeiyunShareDelete: 12007,
    WeiyunShareList: 12008,
    WeiyunShareClear: 12009,
    WeiyunSharePartDownload: 12023,
    WeiyunShareBatchDownload: 12024,
    WeiyunSharePartSaveData: 12025,
    WeiyunShareDocAbs: 12030,
    WeiyunSharePwdView: 12010,
    WeiyunSharePwdVerify: 12011,
    WeiyunSharePwdCreate: 12012,
    WeiyunSharePwdModify: 12013,
    WeiyunSharePwdDelete: 12014,
    WeiyunShareDirList: 12031,
    WeiyunShareNoteView: 12032,
    ClipBoardUpload: 13001,
    ClipBoardDownload: 13002,
    ClipBoardDelete: 13003,
    ClipBoardTrans: 13010,
    ClipBoardView: 13020,
    NoteAdd: 14001,
    NoteDelete: 14002,
    NoteModify: 14003,
    NoteList: 14004,
    NoteDetail: 14005,
    NoteDump: 14006,
    NotePreUpload: 14007,
    NoteGetSummary: 14008,
    NoteStar: 14009,
    DumpColToNote: 14010,
    NotePageListGet: 14031,
    OzProxyTable25: 15002,
    OzProxyTable71: 15003,
    OzProxyTable171: 15004,
    OzProxyTable26: 15005,
    OzProxyTable27: 15006,
    OzProxyClog: 15010,
    OzProxyBackend: 15011,
    OzProxyClient: 15012,
    OzProxyTable39: 15020,
    OzProxyTable40: 15021,
    OzProxyTable41: 15022,
    ReqRecvList: 16001,
    ReqSendList: 16002,
    ReqDeleteFile: 16003,
    ReqDownloadFile: 16004,
    ReqDownloadFileAbs: 16005,
    ReqFileQuery: 16006,
    WeiyunActGetActivity: 17001,
    WeiyunActUserLogin: 17002,
    WeiyunActFeedBack: 17003,
    WeiyunAdd10T: 17006,
    WeiyunCheck10T: 17007,
    DirSetCopy: 18001,
    GetCollectionList: 2e4,
    GetCollectionContent: 20001,
    DelCollection: 20002,
    AddTextCollection: 20003,
    AddLinkCollection: 20004,
    AddGalleryCollection: 20005,
    AddAudioCollection: 20006,
    AddFileCollection: 20007,
    AddLocationCollection: 20008,
    AddRichMediaCollection: 20009,
    FastUploadResource: 20010,
    GetCollectionCountByCatetory: 20011,
    ModCollection: 20012,
    GetCollectionFullInfo: 20013,
    ApplyDownloadFile: 20014,
    GetCollectionSummary: 20015,
    GetCompatibleCollectionInfo: 20016,
    GetArticleList: 20056,
    StarCollection: 20057,
    UnstarCollection: 20058,
    MiniBatchPreUpload: 20301,
    MiniBatchDataUpload: 20302,
    QpicFastUpload: 201e3,
    QpicUploadData: 201001,
    QpicDeletePic: 201002,
    QzoneProxyGetLocation: 202001,
    AutoUpdateGetNewVersion: 203001,
    WeiboProxyShare: 204001,
    GetDlskey: 205001,
    ParseDlskey: 205002,
    FailFileAttr: 206001,
    FailFileList: 206002,
    WeiyunServerList: 206003,
    TpminiQueryFileStatus: 206004,
    DiskConfigGet: 207e3,
    CloudConfigGet: 207001,
    CloudConfigSet: 207002,
    MiFiQueryUserBind: 208001,
    MiFiUserBind: 208002,
    MiFiUserLogOut: 208003,
    MiFiFileUploadSwitch: 208004,
    MiFiQueryNetTypeSupport: 208005,
    MiFiSwitchNet: 208006,
    MiFiJoinInWiFi: 208007,
    MiFiForgetWiFi: 208008,
    SecurityCheck: 209001,
    SecurityCaptchaCheck: 209002,
    SecurityUinBlackListAdd: 209003,
    SecurityUinBlackListDelete: 209004,
    SecurityUinBlackListGet: 209005,
    SecurityFileBlackListAdd: 209006,
    SecurityFileBlackListDelete: 209007,
    SecurityFileBlackListGet: 209008,
    SecurityUinFileBlackListOwnerDownloadAdd: 209009,
    SecurityUinFileBlackListOwnerDownloadDelete: 209010,
    SecurityUinFileBlackListOtherDownloadAdd: 209011,
    SecurityUinFileBlackListOtherDownloadDelete: 209012,
    SecurityUinFileBlackListOuterLinkerAdd: 209013,
    SecurityUinFileBlackListOuterLinkerDelete: 209014,
    SecurityUinFileBlackListAdd: 209015,
    SecurityUinFileBlackListDelete: 209016,
    SecurityUinFileBlackListGet: 209017,
    SecurityUinFileBlackListClear: 209018,
    SecurityFileDelete: 209019,
    SecurityShareKeyDelete: 209020,
    SecurityFileQuery: 209021,
    SecurityShareKeyQuery: 209022,
    MailWhiteList: 210001,
    MailPostfixChecks: 210002,
    HtmlParserCollectionToHtml: 211e3,
    HtmlParserHtmlToRichMedia: 211001,
    ShareLinkCheck: 213e3,
    QqAccessTransfer: 214e3,
    CopyFromOffline: 215e3,
    CopyToOffline: 215001,
    AsycBatchCopy: 215002,
    AsycBatchMove: 215003,
    GuarderCheckIn: 216e3,
    DocviewDispatcherGetUrl: 217e3,
    DocviewDispatcherReportSessionLog: 217003,
    WopiServerCheckFileInfo: 218e3,
    WopiServerGetFile: 218001,
    QmailGetAddrList: 223001,
    QmailSendMail: 223002,
    GetTreeView: 224001,
    GetHomeList: 224002,
    GetHomeDirInfo: 224003,
    WxCreatePayId: 220001,
    WxQueryPayId: 220002,
    WxQueryAllPay: 220003,
    WxDeliver: 220004,
    WxQueryProductInfo: 220501,
    SmsSend: 243500,
    TemporaryFileDiskUserInfoGet: 242201,
    TemporaryFileDiskFileBatchQuery: 242206,
    TemporaryFileDiskDirList: 242208,
    TemporaryFileDiskFileUpload: 242301,
    TemporaryFileDiskFileBatchDownload: 242402,
    TemporaryFileDiskFilePackageDownload: 242403,
    TemporaryFileDiskDirFileBatchDeleteEx: 242509,
    TemporaryFileDiskFileBatchRename: 242606,
    TemporaryFileExpiredInfoGet: 242901
}, i = {
    2201: "weiyunQdiskClient",
    2209: "weiyunQdisk",
    2402: "weiyunQdiskClient",
    2509: "weiyunQdiskClient",
    2606: "weiyunQdiskClient",
    2615: "weiyunQdiskClient",
    11005: "weiyunPwd",
    12001: "weiyunShare",
    12002: "weiyunShare",
    12023: "weiyunShare",
    12024: "weiyunShare",
    12025: "weiyunShare",
    12031: "weiyunShare",
    26111: "weiyunFileLibClient"
};

module.exports = {
    get: function(t) {
        var l = e[t], r = void 0;
        return i[l] && (r = i[l]), {
            cmd: t,
            cmdId: l,
            protocol: r
        };
    }
};