const axios = require("axios")
// const cheerio = require("cheerio")
const socket =  require("ws");


class searchController {
    // async search (req,res) {
    //     const url = "https://medium.com/tag/machine-learning";

    //     const { data } = await axios.get(url);
    //     const $ = cheerio.load(data);
    //     $("div.ae.fu")
    //     .each(async (index, element) => {
    //         const title = $(element).find("h2.az.be.hq.hr.hs.bi.ht.hu.hv.bm.hw").text()
    //         var link = $(element).find("a.ez.fa.fb.fc.fd.fe.ff.fg.fh.fi.fj.fk.fl.fm.fn").attr('href')
    //         const creator = $(element).find("h4.az.em.hj.hk.bz.hl.ca.cb.cc.cd.ce.bc.hm").text()
    //         var claps = $(element).find("button.ez.fa.fb.fc.fd.fe.ff.fg.fh.fi.fj.fk.fl.fm.fn").text()
    //         claps = claps.split(' ')[0];
    //          var comments = $(element).find("span.iw.iv").text()
    //         if(comments == ""){ comments = "0";}
    //         const details = {
    //             posted: null,
    //             timetoread: null
    //         }
    //         details.posted = $(element).find("p.az.b.hj.eo.bz.ii.ca.cb.cc.cd.ce.fp").text()
    //         details.timetoread = $(element).find("span.az.b.hj.eofp").text()
    //         console.log(title)
    //         res.setHeader("Content-Type", "application/json");
    //         res.setHeader("Access-Control-Allow-Origin", "*");
    //         res.writeHead(200);
    //         res.write(title);
    //         // const { blog } = await axios.get(link);
    //         // const b = cheerio.load(blog);
    //         // b("a.bb.b.kv.kw.bz.kx.ky.bx.s.kz")
    //         // .each((idx,ele) =>{
    //         //     console.log(ele.text())
    //         // })


    //     })
    // }

async search (req,res) {        

        var data = JSON.stringify([
        {
            "operationName": "TagFeedQuery",
            "variables": {
            "tagSlug": "machine-learning",
            "mode": "HOT",
            "paging": {
                "to": "20",
                "limit": 20
            }
            },
            "query": "query TagFeedQuery($paging: PagingOptions, $tagSlug: String, $mode: TagFeedMode) {\n  tagFeed(paging: $paging, tagSlug: $tagSlug, mode: $mode) {\n    items {\n      ... on TagFeedItem {\n        feedId\n        reason\n        moduleSourceEncoding\n        postProviderExplanation {\n          reason\n          topic {\n            name\n            __typename\n          }\n          __typename\n        }\n        post {\n          ...TagFeedItem_post\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    pagingInfo {\n      next {\n        limit\n        to\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment TagFeedItem_post on Post {\n  id\n  title\n  mediumUrl\n  creator {\n    id\n    __typename\n  }\n  previewContent {\n    subtitle\n    __typename\n  }\n  previewImage {\n    id\n    __typename\n  }\n  firstPublishedAt\n  voters(paging: {limit: 3}) {\n    items {\n      user {\n        ...FacePile_user\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  postResponses {\n    count\n    __typename\n  }\n  allowResponses\n  isLimitedState\n  ...MultiVote_post\n  ...PostPreviewAvatar_post\n  ...BookmarkButton_post\n  ...CreatorActionOverflowPopover_post\n  ...PostListingReadingTime_post\n  ...PostPresentationTracker_post\n  ...PostFooterSocialPopover_post\n  ...usePostUrl_post\n  __typename\n}\n\nfragment MultiVote_post on Post {\n  id\n  clapCount\n  creator {\n    id\n    ...SusiClickable_user\n    __typename\n  }\n  isPublished\n  ...SusiClickable_post\n  collection {\n    id\n    slug\n    __typename\n  }\n  isLimitedState\n  ...MultiVoteCount_post\n  __typename\n}\n\nfragment SusiClickable_post on Post {\n  id\n  mediumUrl\n  ...SusiContainer_post\n  __typename\n}\n\nfragment SusiContainer_post on Post {\n  id\n  __typename\n}\n\nfragment SusiClickable_user on User {\n  ...SusiContainer_user\n  __typename\n  id\n}\n\nfragment SusiContainer_user on User {\n  ...SignInOptions_user\n  ...SignUpOptions_user\n  __typename\n  id\n}\n\nfragment SignInOptions_user on User {\n  id\n  name\n  __typename\n}\n\nfragment SignUpOptions_user on User {\n  id\n  name\n  __typename\n}\n\nfragment MultiVoteCount_post on Post {\n  id\n  ...PostVotersNetwork_post\n  __typename\n}\n\nfragment PostVotersNetwork_post on Post {\n  id\n  voterCount\n  recommenders {\n    name\n    __typename\n  }\n  __typename\n}\n\nfragment PostPreviewAvatar_post on Post {\n  __typename\n  id\n  collection {\n    id\n    name\n    ...CollectionAvatar_collection\n    __typename\n  }\n  creator {\n    id\n    username\n    name\n    ...UserAvatar_user\n    ...userUrl_user\n    __typename\n  }\n}\n\nfragment CollectionAvatar_collection on Collection {\n  name\n  avatar {\n    id\n    __typename\n  }\n  ...collectionUrl_collection\n  __typename\n  id\n}\n\nfragment collectionUrl_collection on Collection {\n  id\n  domain\n  slug\n  __typename\n}\n\nfragment UserAvatar_user on User {\n  __typename\n  id\n  imageId\n  mediumMemberAt\n  name\n  username\n  ...userUrl_user\n}\n\nfragment userUrl_user on User {\n  __typename\n  id\n  customDomainState {\n    live {\n      domain\n      __typename\n    }\n    __typename\n  }\n  hasSubdomain\n  username\n}\n\nfragment BookmarkButton_post on Post {\n  visibility\n  ...SusiClickable_post\n  ...AddToCatalogBookmarkButton_post\n  __typename\n  id\n}\n\nfragment AddToCatalogBookmarkButton_post on Post {\n  ...AddToCatalogBase_post\n  __typename\n  id\n}\n\nfragment AddToCatalogBase_post on Post {\n  id\n  viewerEdge {\n    catalogsConnection {\n      catalogsContainingThis(type: LISTS) {\n        catalogId\n        catalogItemIds\n        __typename\n      }\n      predefinedContainingThis {\n        catalogId\n        predefined\n        catalogItemIds\n        __typename\n      }\n      __typename\n    }\n    ...editCatalogItemsMutation_postViewerEdge\n    ...useAddItemToPredefinedCatalog_postViewerEdge\n    __typename\n    id\n  }\n  ...WithToggleInsideCatalog_post\n  __typename\n}\n\nfragment useAddItemToPredefinedCatalog_postViewerEdge on PostViewerEdge {\n  id\n  catalogsConnection {\n    predefinedContainingThis {\n      catalogId\n      version\n      predefined\n      catalogItemIds\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment editCatalogItemsMutation_postViewerEdge on PostViewerEdge {\n  id\n  catalogsConnection {\n    catalogsContainingThis(type: LISTS) {\n      catalogId\n      version\n      catalogItemIds\n      __typename\n    }\n    predefinedContainingThis {\n      catalogId\n      predefined\n      version\n      catalogItemIds\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment WithToggleInsideCatalog_post on Post {\n  id\n  viewerEdge {\n    catalogsConnection {\n      catalogsContainingThis(type: LISTS) {\n        catalogId\n        __typename\n      }\n      predefinedContainingThis {\n        predefined\n        __typename\n      }\n      __typename\n    }\n    __typename\n    id\n  }\n  __typename\n}\n\nfragment CreatorActionOverflowPopover_post on Post {\n  allowResponses\n  id\n  statusForCollection\n  isLocked\n  isPublished\n  clapCount\n  mediumUrl\n  pinnedAt\n  pinnedByCreatorAt\n  curationEligibleAt\n  mediumUrl\n  responseDistribution\n  visibility\n  ...useIsPinnedInContext_post\n  pendingCollection {\n    id\n    name\n    creator {\n      id\n      __typename\n    }\n    avatar {\n      id\n      __typename\n    }\n    domain\n    slug\n    __typename\n  }\n  creator {\n    id\n    ...MutePopoverOptions_creator\n    ...auroraHooks_publisher\n    __typename\n  }\n  collection {\n    id\n    name\n    creator {\n      id\n      __typename\n    }\n    avatar {\n      id\n      __typename\n    }\n    domain\n    slug\n    ...MutePopoverOptions_collection\n    ...auroraHooks_publisher\n    __typename\n  }\n  ...ClapMutation_post\n  ...NewsletterV3EmailToSubscribersMenuItem_post\n  __typename\n}\n\nfragment MutePopoverOptions_creator on User {\n  id\n  __typename\n}\n\nfragment MutePopoverOptions_collection on Collection {\n  id\n  __typename\n}\n\nfragment ClapMutation_post on Post {\n  __typename\n  id\n  clapCount\n  ...MultiVoteCount_post\n}\n\nfragment useIsPinnedInContext_post on Post {\n  id\n  collection {\n    id\n    __typename\n  }\n  pendingCollection {\n    id\n    __typename\n  }\n  pinnedAt\n  pinnedByCreatorAt\n  __typename\n}\n\nfragment auroraHooks_publisher on Publisher {\n  __typename\n  ... on Collection {\n    isAuroraEligible\n    isAuroraVisible\n    viewerEdge {\n      id\n      isEditor\n      __typename\n    }\n    __typename\n    id\n  }\n  ... on User {\n    isAuroraVisible\n    __typename\n    id\n  }\n}\n\nfragment NewsletterV3EmailToSubscribersMenuItem_post on Post {\n  id\n  creator {\n    id\n    newsletterV3 {\n      id\n      subscribersCount\n      __typename\n    }\n    __typename\n  }\n  isNewsletter\n  isAuthorNewsletter\n  __typename\n}\n\nfragment FacePile_user on User {\n  __typename\n  id\n  imageId\n  name\n}\n\nfragment PostListingReadingTime_post on Post {\n  readingTime\n  __typename\n  id\n}\n\nfragment PostPresentationTracker_post on Post {\n  id\n  visibility\n  previewContent {\n    isFullContent\n    __typename\n  }\n  collection {\n    id\n    slug\n    __typename\n  }\n  __typename\n}\n\nfragment PostFooterSocialPopover_post on Post {\n  id\n  mediumUrl\n  title\n  ...SharePostButton_post\n  __typename\n}\n\nfragment SharePostButton_post on Post {\n  id\n  __typename\n}\n\nfragment usePostUrl_post on Post {\n  id\n  creator {\n    id\n    customDomainState {\n      live {\n        domain\n        __typename\n      }\n      __typename\n    }\n    hasSubdomain\n    username\n    __typename\n  }\n  collection {\n    id\n    domain\n    slug\n    __typename\n  }\n  isSeries\n  mediumUrl\n  sequence {\n    slug\n    __typename\n  }\n  uniqueSlug\n  __typename\n}\n"
        }
        ]);

        var config = {
        method: 'post',
        url: 'https://medium.com/_/graphql',
        headers: { 
            'authority': 'medium.com', 
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"', 
            'medium-frontend-route': 'tag', 
            'dnt': '1', 
            'sec-ch-ua-platform': '"Windows"', 
            'apollographql-client-name': 'lite', 
            'ot-tracer-sampled': 'true', 
            'sec-ch-ua-mobile': '?0', 
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36', 
            'medium-frontend-path': '/tag/machine-learning', 
            'graphql-operation': 'TagFeedQuery', 
            'ot-tracer-traceid': '6a45be6e40f73056', 
            'accept': '*/*', 
            'medium-frontend-app': 'lite/main-20220105-232651-14b8c49740', 
            'apollographql-client-version': 'main-20220105-232651-14b8c49740', 
            'content-type': 'application/json', 
            'ot-tracer-spanid': '75d44c6514733a9e', 
            'origin': 'https://medium.com', 
            'sec-fetch-site': 'same-origin', 
            'sec-fetch-mode': 'cors', 
            'sec-fetch-dest': 'empty', 
            'referer': 'https://medium.com/tag/machine-learning', 
            'accept-language': 'en-US,en;q=0.9', 
            'cookie': 'uid=lo_4f5160770141; sid=1%3Ae%2BVXrh6Xkm5LhJSDkAnacoM7XnJaZsJ%2B3CuUBBYwvOUUtjZcSAsCIr22JfqnNa%2F%2BOcIc1k0WVE53kvYuMCPvHw%3D%3D; optimizelyEndUserId=lo_4f5160770141; _ga=GA1.2.828649001.1634453265; _gid=GA1.2.853629575.1641312433; g_state={"i_p":1643786756786,"i_l":4}; __cfruid=a921af6b640c27156dfb71bb1e47b8a15f82497c-1641560628; _dd_s=rum=0&expire=1641562092706; dd_cookie_test_64381b76-c495-480f-99de-208e24b891f7=test; __cfruid=8ed1692838828bbc954f449c8f63e360f7887c80-1641547003; optimizelyEndUserId=lo_686347489719; sid=1%3ARFEJ%2F0l4mr4Dcxs8ZemVyR28B%2Be99bYuu8D04wpb0KGCKml90gueb8CIVk2zF3b3; uid=lo_686347489719'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            const articles = response.data[0].data.tagFeed.items
            
            for(let i=0; i<10;i++){
                let obj = {
                    creator : articles[i].post.creator.name,
                    title : articles[i].post.title,
                    link : articles[i].post.mediumUrl,
                    subtitle : articles[i].post.previewContent.subtitle,
                    claps : articles[i].post.clapCount,
                    comments : articles[i].post.postResponses.count,
                }

                console.log(obj)
            
            const client = new socket("ws://localhost:8081");
            client.addEventListener("open", e =>{
                client.send(JSON.stringify(obj))
            })
            }

        })
        .catch(function (error) {
        console.log(error);
        });

    }
    async search2 (req,res) {
        console.log("buzzz...")
    }
}

module.exports = new searchController();






