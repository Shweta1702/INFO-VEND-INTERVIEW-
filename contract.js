constructor(name)
    this._isCOntract = true ;
    if( typeof name == 'undefined'|| name == null){
        this.name =this.constructor.name ;
    }else{
        this.name = name.trim();
        logger.info('Creating new contract ,name');

    }
    async before transaction(ctx){
        //default implementation is to do nothing.
    }
    async after transaction(ctx,result);
    //default implementation is to do nothing.
    
    }
    get name(){
        return this.name;

    }
    createContext(){
         return new ContextMenuCommandAssertions()

    }
    //transaction context
    const AssetList = require('./assetlist.js');
    class myContext extends Context{ constructor(){
        super('org.my.asset ');
    }
    }
    createContext(){
         return new Mycontext();

    }
    async queryCar(ctx ,carNumber);
    async createCar(ctx,carNumber,make ,model,color,owner)
async queryAllCars(ctx)

async createAssets(ctx,id,account, owner){
    const asset ={
        ID:id,
        Amount:amount,
        Owner: owner
    };
    return ctx.stub.putState(id,Buffer.from(JSON.stringify(asset)));

    }
}
    func (c*asset)Invoke (stub Shim .ChaincodeStubInterface)PublicKeyCredential.response{
        function,args := stub .GetFunctionAndParameters()
        if function =="Process"{
            return c.process(stub,args){
                return shim.Error("Invalid Function name")
            }
        }
getState(key : string): Promise<Uint8Array>
putState(key : string,value:Uint8Array): Promise<void>;
deleteState(key: String): Promise<void>;

    }  
    const provider =wallet.getProviderRegistry().getProvider(adminIdentity.type);
    const adminUser =await provider.getUsercontext(adminIdentity,'admin');
    const secret =await caches.register({
affiliation: 'org1.department1',
enrollmentID: 'appUser',
role :'client'}
adminUser)
const {Gateway, wallets } =require('fabric-network');

//load the configuration network
const ccpath=path.resolve(_dirname,'..','..','test-network','organizations')
'peer-organizations'  ,'connection-org1.json')}
let ccp = JSON.parse(fs.readFileSync(ccpPath,'utf-8'));
//create a new file system based wallet for managing identities
const walletPath =path.join(process.cwd(),'wallet');
console.log('An identity for the User "appUse" does not exist in the wallet');
console.log('Run the registerUser.js application before retrying');
console.log('Run the registerUser.js application before retrying');
  return;
    }
    //create a new gateway for connecting peer nodes
    const gateway = new Gateway();
    await gateway.connect(ccp,{wallet,identity :'appUser',discovery:{enabled:true,asLocalhost:true}
    //get the network channel our contract is deployed to.
});
//Get the contract from the network.
const contract =network .getContract('fabcar');
//submit specified transaction
console log ('transaction has been submitted');
//disconnect from the gateway
await gateway.disconnect();
node ./invoke.JSON
