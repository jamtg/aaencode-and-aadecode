function aadecode (t){
	t = t.replace("\) \('_'\)","");
	t = t.replace("\(ﾟДﾟ\) \['_'\] \(","return ");
	var x = new Function(t);
	var r = x();
	return r;
}