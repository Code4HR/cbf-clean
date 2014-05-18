rm -rf ../cbf-cleanDeploy
mkdir ../cbf-cleanDeploy
demeteorizer -o ../cbf-cleanDeploy
cd ../cbf-cleanDeploy
modulus deploy -p cbf-clean
cd ../cbf-clean
