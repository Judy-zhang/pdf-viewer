# Place this script in the same directory as your npm 'package.json' file.
param ($extra_install_opts, $extra_build_opts)

echo "param 'extra_install_opts' is $extra_install_opts"
echo "param 'extra_build_opts' is $extra_build_opts"

npm install $extra_install_opts
if ($?){
    echo "done with npm install"
}else{
    echo "failed during npm install"
    exit(1)
}

npm run build $extra_build_opts
if ($?){
    echo "done with npm run build"
}else{
    echo "failed during npm run build"
    exit(1)
}