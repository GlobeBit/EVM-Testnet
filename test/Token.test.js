const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token", function () {
  async function deployTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    await token.waitForDeployment();

    return { token, owner, addr1, addr2 };
  }

  it("assigns total supply to deployer", async function () {
    const { token, owner } = await deployTokenFixture();

    expect(await token.balanceOf(owner.address)).to.equal(await token.totalSupply());
  });

  it("transfers tokens between accounts", async function () {
    const { token, owner, addr1 } = await deployTokenFixture();
    const amount = ethers.parseEther("100");

    await expect(token.transfer(addr1.address, amount))
      .to.emit(token, "Transfer")
      .withArgs(owner.address, addr1.address, amount);

    expect(await token.balanceOf(addr1.address)).to.equal(amount);
  });

  it("approves and allows transferFrom", async function () {
    const { token, owner, addr1, addr2 } = await deployTokenFixture();
    const approveAmount = ethers.parseEther("50");
    const transferAmount = ethers.parseEther("20");

    await expect(token.approve(addr1.address, approveAmount))
      .to.emit(token, "Approval")
      .withArgs(owner.address, addr1.address, approveAmount);

    await expect(token.connect(addr1).transferFrom(owner.address, addr2.address, transferAmount))
      .to.emit(token, "Transfer")
      .withArgs(owner.address, addr2.address, transferAmount);

    expect(await token.balanceOf(addr2.address)).to.equal(transferAmount);
    expect(await token.allowance(owner.address, addr1.address)).to.equal(
      approveAmount - transferAmount
    );
  });

  it("reverts when transferring more than balance", async function () {
    const { token, addr1, addr2 } = await deployTokenFixture();

    await expect(
      token.connect(addr1).transfer(addr2.address, ethers.parseEther("1"))
    ).to.be.revertedWith("Insufficient balance");
  });
});
