/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  GroupVerifier,
  GroupVerifierInterface,
} from "../../../../../@p0x-labs/poseidon-zk-circuits/contracts/group_verifier.sol/GroupVerifier";

const _abi = [
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "input",
        type: "uint256[2]",
      },
    ],
    name: "verifyProof",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d7f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f5c9d69e14610030575b600080fd5b61004a60048036038101906100459190611a85565b61004c565b005b61005461181a565b604051806040016040528086600060028110610099577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152602001866001600281106100dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152508160000181905250604051806040016040528060405180604001604052808760006002811061013d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160006002811061017b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152602001876000600281106101bf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201516001600281106101fd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151815250815260200160405180604001604052808760016002811061024f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160006002811061028d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152602001876001600281106102d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015160016002811061030f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152508152508160200181905250604051806040016040528084600060028110610367577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201518152602001846001600281106103ab577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151815250816040018190525060006103c5610885565b9050806080015151600160026103db9190611b5b565b14610412576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008160800151600081518110610452577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151905060005b600281101561051d576105088261050385608001516001856104819190611b5b565b815181106104b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518885600281106104f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020151610d97565b610f25565b9150808061051590611c7a565b91505061045f565b506000600467ffffffffffffffff811115610561577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561059a57816020015b61058761184d565b81526020019060019003908161057f5790505b5090506000600467ffffffffffffffff8111156105e0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561061957816020015b610606611867565b8152602001906001900390816105fe5790505b50905061062985600001516110a6565b82600081518110610663577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508460200151816000815181106106ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508360000151826001815181106106f7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250836020015181600181518110610741577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508282600281518110610787577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052508360400151816002815181106107d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525084604001518260038151811061081b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250836060015181600381518110610865577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525061087a82826111c7565b505050505050505050565b61088d61188d565b60405180604001604052807f1fca1bffff5750f207496f33135c888c3dc6c589c3eb1d0f44d774c08ae320f081526020017f2a05aee3af55d392d74cedb842b695f3806cd2f828f69569cd08041b0688a1288152508160000181905250604051806040016040528060405180604001604052807f0d1700570d923e05206d96ccc16acb0e3254f2457e45ebe17b61606a08cb2ab481526020017f1aa71292d71a3848cf3465f3d525a5e3b1e6a768e0129bdda9af0f7d148c033a815250815260200160405180604001604052807f15723e47d438024acc79a1ae32c51a2d97e88a6dd21ef853ee90d366b9cd6eea81526020017f1f90a741bce27cebb5713e13fad2aab919d50f67a4d45030705abe845c96adee8152508152508160200181905250604051806040016040528060405180604001604052807f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed815250815260200160405180604001604052807f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8152508152508160400181905250604051806040016040528060405180604001604052807f11854b742e08addd8e34b81905260a3c7a02dbd63729d8f2fb47d58be945ba2b81526020017f11374ce316750070d9ea0400f4dea449a6f0cfa2a336a3060e9e2047ee60fc32815250815260200160405180604001604052807f200984d76f593f710aa2af663660d67ef25ef08877a4d0c3671295b19f4ed51c81526020017f0ee93d2ba0210e2abce09f9fa4beb71f61482e4dce9c4796b59085f122cefb3d8152508152508160600181905250600367ffffffffffffffff811115610b7a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610bb357816020015b610ba061184d565b815260200190600190039081610b985790505b50816080018190525060405180604001604052807e504a0b812d10b2cb3d59fbbd2f0603bcc3db0d7cbe1d49a01c35aa622b9d9b81526020017f2a460d8fe4e3eb50f46264b22eacb631940d20b2c2a0015a14e2e390e083e8c68152508160800151600081518110610c4e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525060405180604001604052807f2b9649b3426571365acdfd506433929b272343d60223998351dd9b7e7f087c1b81526020017f14e4691e14635eaf57f111f469fde287c79c18fd9249d61212e18d9050d7e9128152508160800151600181518110610cec577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525060405180604001604052807e17b09c08130c117a8c5ae214421a5f50a7559b0f20d369f3dd86f9e050214c81526020017f02a3c4d76e2af2258879eca871d9c2b7f90d1a212c6346e5553714439892b97c8152508160800151600281518110610d89577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525090565b610d9f61184d565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018210610df8576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e006118d4565b836000015181600060038110610e3f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050836020015181600160038110610e87577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020020181815250508281600260038110610ecb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050600060608360808460076107d05a03fa905080610f1d576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505092915050565b610f2d61184d565b610f356118f6565b836000015181600060048110610f74577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050836020015181600160048110610fbc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050826000015181600260048110611004577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200201818152505082602001518160036004811061104c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002018181525050600060608360c08460066107d05a03fa90508061109e576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505092915050565b6110ae61184d565b600082600001511480156110c6575060008260200151145b156110e957604051806040016040528060008152602001600081525090506111c2565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47826000015110158061114057507f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47826020015110155b15611177576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808360000151815260200183602001517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476111bc9190611c0b565b81525090505b919050565b8051825114611202576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008251905060006006826112179190611bb1565b905060008167ffffffffffffffff81111561125b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156112895781602001602082028036833780820191505090505b50905060005b8381101561176e578581815181106112d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600001518260006006846112ec9190611bb1565b6112f69190611b5b565b8151811061132d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050858181518110611372577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516020015182600160068461138e9190611bb1565b6113989190611b5b565b815181106113cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050848181518110611414577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160000151600060028110611459577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015182600260068461146e9190611bb1565b6114789190611b5b565b815181106114af577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508481815181106114f4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160000151600160028110611539577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015182600360068461154e9190611bb1565b6115589190611b5b565b8151811061158f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508481815181106115d4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160200151600060028110611619577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015182600460068461162e9190611bb1565b6116389190611b5b565b8151811061166f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181815250508481815181106116b4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151602001516001600281106116f9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015182600560068461170e9190611bb1565b6117189190611b5b565b8151811061174f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050808061176690611c7a565b91505061128f565b50611777611918565b6000602082602086026020860160086107d05a03fa90508015806117da57506001826000600181106117d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002015114155b15611811576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b604051806060016040528061182d61184d565b815260200161183a611867565b815260200161184761184d565b81525090565b604051806040016040528060008152602001600081525090565b604051806040016040528061187a61193a565b815260200161188761193a565b81525090565b6040518060a001604052806118a061184d565b81526020016118ad611867565b81526020016118ba611867565b81526020016118c7611867565b8152602001606081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b6040518060200160405280600190602082028036833780820191505090505090565b6040518060400160405280600290602082028036833780820191505090505090565b600061196f61196a84611b0f565b611aea565b9050808285604086028201111561198557600080fd5b60005b858110156119b5578161199b8882611a49565b845260208401935060408301925050600181019050611988565b5050509392505050565b60006119d26119cd84611b35565b611aea565b905080828560208602820111156119e857600080fd5b60005b85811015611a1857816119fe8882611a70565b8452602084019350602083019250506001810190506119eb565b5050509392505050565b600082601f830112611a3357600080fd5b6002611a4084828561195c565b91505092915050565b600082601f830112611a5a57600080fd5b6002611a678482856119bf565b91505092915050565b600081359050611a7f81611d32565b92915050565b6000806000806101408587031215611a9c57600080fd5b6000611aaa87828801611a49565b9450506040611abb87828801611a22565b93505060c0611acc87828801611a49565b925050610100611ade87828801611a49565b91505092959194509250565b6000611af4611b05565b9050611b008282611c49565b919050565b6000604051905090565b600067ffffffffffffffff821115611b2a57611b29611cf2565b5b602082029050919050565b600067ffffffffffffffff821115611b5057611b4f611cf2565b5b602082029050919050565b6000611b6682611c3f565b9150611b7183611c3f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ba657611ba5611cc3565b5b828201905092915050565b6000611bbc82611c3f565b9150611bc783611c3f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611c0057611bff611cc3565b5b828202905092915050565b6000611c1682611c3f565b9150611c2183611c3f565b925082821015611c3457611c33611cc3565b5b828203905092915050565b6000819050919050565b611c5282611d21565b810181811067ffffffffffffffff82111715611c7157611c70611cf2565b5b80604052505050565b6000611c8582611c3f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611cb857611cb7611cc3565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611d3b81611c3f565b8114611d4657600080fd5b5056fea26469706673582212205975fb3c01794f2601fa27d0c92cf64cafff51fa1ab7c3d2228c4f6d0c34196264736f6c63430008040033";

type GroupVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GroupVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GroupVerifier__factory extends ContractFactory {
  constructor(...args: GroupVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GroupVerifier> {
    return super.deploy(overrides || {}) as Promise<GroupVerifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GroupVerifier {
    return super.attach(address) as GroupVerifier;
  }
  override connect(signer: Signer): GroupVerifier__factory {
    return super.connect(signer) as GroupVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GroupVerifierInterface {
    return new utils.Interface(_abi) as GroupVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GroupVerifier {
    return new Contract(address, _abi, signerOrProvider) as GroupVerifier;
  }
}
